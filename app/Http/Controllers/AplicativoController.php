<?php

namespace App\Http\Controllers;

use App\Aplicativo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AplicativoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list(Request $request)
    {
        $limit = ($request->has('limit')) ? $request->query('limit') : 10;
        $orderBy = ($request->has('order')) ? $request->query('order') : 'name';
        $page = ($request->has('page')) ? $request->query('page') : 1;
        
        $aplicativos = DB::table('aplicativos')
            ->select(['id','user_id','name','description'])
            ->orderBy($orderBy, 'name')
            ->paginate($limit);
                    
        $aplicativos->setPath("/aplicativos?limit={$limit}"); 
        
        return response()->json([
            'title'=> 'Aplicativos Educacionais',
            'paginator'=> $aplicativos,
            'page'=> $aplicativos->currentPage(),
            'limit' => $aplicativos->perPage()
        ]);    
    }

/**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
        $id = DB::table('aplicativos')->insertGetId(
            [
                'user_id' => 1,
                'name' => $request->get('name'),
                'description'=> $request->get('description'),
                'is_featured' => $request->get('is_featured'),
                'options' => $request->get('options')
    
            ]
        );
        return response()->json([
            'message' => 'Aplicativo cadastrado com sucesso',
            'id' => $id
        ]);
    }

/**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Aplicativo  $aplicativo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $aplicativo = Aplicativo::find($id);
        
        $data = [
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'is_featured' => $request->get('is_featured'), 
            'options' => $request->get('options')
        ];
        
        $aplicativo->save($data);
        
        return response()->json($aplicativo->toJson());
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Aplicativo  $conteudo
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $aplicativo = Aplicativo::find($id);
        $resp = [];
        if(is_null($aplicativo)){
            $resp = [
                'menssage' => 'Aplicativo não encontrado',
                'is_deleted' => false
            ];
        }else {
            $resp = [
                'menssage' => "Aplicativo de id: {$id} foi apagado com sucesso!!",
                'is_deleted' => $aplicativo->delete()
            ];
        }
        
        return response()->json($resp);
    }

    public function search(Request $request, $termo)
    {
        $limit = $request->query('limit', 15);
        $page = $request->query('page', 1);

        $aplicativos = DB::table('aplicativos')
                    ->select(['id','name'])
                    ->where(DB::raw('unaccent(lower(name))'), 'ILIKE' , DB::raw("unaccent(lower('%{$termo}%'))"))
                    ->paginate($limit);

        $aplicativos->setPath("/aplicativos/search/{$termo}?limit={$limit}");  

        return response()->json([
            'message' => 'Resultados da busca',
            'items' => $aplicativos,
            'page'=> $aplicativos->currentPage(),
            'limit' => $aplicativos->perPage()
        ]);    
    }



}
