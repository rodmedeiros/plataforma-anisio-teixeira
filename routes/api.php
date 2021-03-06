<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
Route::get('/files/galeria', 'FileController@getGallery')->name('lista.galeria.imagens');
Route::get('/files/{id}', 'FileController@getFiles')->name('busca.arquivo');
Route::post('/files/{id}', 'FileController@createFile')->name('adiciona.arquivo');
Route::get('/autocompletar', 'HomeController@autocomplete')->name('autocompletar.home');
Route::get('/layout', 'HomeController@getLayout')->name('lista.links');

/** CATEGORIAS */
Route::get('/categorias', 'CategoryController@index')->name('lista.categorias');
Route::get('/categorias/{id}', 'CategoryController@getById')->name('lista.categoria.x.id');
Route::get('/categorias/canal/{id}', 'CategoryController@getCategoryByCanalId')->name('lista.categoria.x.canal.id');
Route::get('/categorias/search/{term}', 'CategoryController@search')->name('buscar.category');

/** TIPOS */
Route::get('/tipos', 'TipoController@index')->name('listar.tipos');
Route::get('/tipos/{id}', 'TipoController@getTiposById')->name('listar.tipos.x.id');
Route::get('/tipos/search/{term}', 'TipoController@search')->name('buscar.tipo');

/** DENUNCIA E FALE CONOSCO */
Route::post('/contato', 'ContatoController@create')->name('criar.faleconosco.contato');

/** CANAIS */
Route::get('/canais/slug/{slug}', 'CanalController@getBySlug')->name('buscar.canal.x.url.amigavel');

/** COMPONENTES */
Route::get('/componentes', 'ComponentesController@index')->name('lista.componentes.curriculares');

/** CATEGORIAS COMPONENTES */
Route::get('/componentescategorias', 'CurricularComponentCategoryController@index')->name('lista.categorias.componentes.curriculares');

 /**NIVEL ENSINO**/
 Route::get('/nivelensino', 'NivelEnsinoController@index')->name('lista.nevelensino');

/** CONTEUDOS */
Route::get('/conteudos', 'ConteudoController@index')->name('lista.conteudo');
Route::get('/conteudos/sites', 'ConteudoController@getSitesTematicos')->name('lista.sites.tematicos');
Route::get('/conteudos/search/{term}', 'ConteudoController@search')->name('busca.conteudo');
Route::get('/conteudos/{id}', 'ConteudoController@getById')->name('busca.x.conteudo.id');
Route::get('/conteudos/tag/{id}', 'ConteudoController@getByTagId')->name('busca.x.tag.id');
Route::get('/conteudos/relacionados/{id}', 'ConteudoController@conteudosRelacionados')->name('busca.x.id');
Route::get('/conteudos/destaques/{slug}', 'ConteudoController@getConteudosRecentes')->name('lista.recentes');

/** BLOG */
Route::get('/posts', 'WordpressController@index')->name('lista.postagens');
Route::get('/posts/{id}', 'WordpressController@getById')->name('busca.postagen.x.id');
Route::get('/posts/estatisticas', 'WordpressController@getEstatisticas')->name('estatisticas.blog');

/** APLICATIVOS */
Route::get('/aplicativos', 'AplicativoController@index')->name('lista.aplicativo');
Route::get('/aplicativos/categories', 'AplicativoCategoryController@index')->name('lista.categorias');
Route::get('/aplicativos/search/{term}', 'AplicativoController@search')->name('busca.aplicativo');
Route::get('/aplicativos/{id}', 'AplicativoController@getById')->name('busca.x.aplicativo.id');

/** AUTENTICACAO */
Route::post('/auth/login', 'AuthController@login')->name('login');

Route::post('/auth/cadastro', 'AuthController@register')->name('registro.usuario');
Route::get('/auth/verificar/{token}', 'AuthController@verifyToken')->name('verificar.token');
Route::post('/auth/recuperar-senha', 'AuthController@recoverPass')->name('recuperar.senha');
Route::post('/auth/modificar-senha/{token}', 'AuthController@modificarSenha')->name('modificar.senha');
Route::get('/auth/verificar/email/{token}', 'AuthController@verifyTokenUserRegister')->name('verificar.usuario.token');

/** OPTIONS  */
Route::get('/options/{name}', 'OptionsController@getByName')->name('busca.metadata.x.nome');
Route::get('/options', 'OptionsController@index')->name('listar.opcoes');

/** TAGS */
Route::get('/tags/{id}', 'TagController@getById')->name('busca.x.tag.id');
/** LICENÇAS */
Route::get('/licencas', 'LicenseController@index')->name('listar.licencas');
/** DOWNLOAD FILE **/
Route::get('/files/{directory}/{id}', 'FileController@downloadFile')->name('downloadFile.id');

/**
*Route::get(
*    '/planilhas/load-rotinas/',
*    'ConteudoPlanilhaController@getRotinaDeEstudos'
*)->name('busca.rotina.de.estudos');
*Route::get(
*    '/planilhas/load-faculdades/',
*    'ConteudoPlanilhaController@getFaculdadesDaBahia'
*)->name('busca.faculdades');
*/
Route::get('/planilhas', 'ConteudoPlanilhaController@getDocumentByName')->name('docs.planilhas');

Route::get('/rotinas/{nivel}/{semana}', 'ConteudoPlanilhaController@rotinasPerNivel')
->name('rotinas.estudos.x.nivel');
/***********************************************
 *
 * ROTAS PROTEGIDAS COM JSON WEB TOKEN
 * USUÁRIO DEVE ESTAR LOGADO PARA ACESSAR ESSAS ROTAS
 *
 ********************************************************/
Route::group(
    ['middleware' => ['jwt.auth']],
    function () {
        /** CATEGORIAS DOS CONTEÚDOS*/
        Route::post('/categorias', 'CategoryController@create')->name('criar.categorias');
        Route::put('/categorias/{id}', 'CategoryController@update')->name('atualizar.categorias');
        Route::delete('/categorias/{id}', 'CategoryController@delete')->name('deletar.categorias');
        Route::post('/categorias', 'CategoryController@create')->name('adicionar.categorias');

        /** COMPONENTES */
        Route::post('/componentes', 'ComponentesController@create')->name('criar.componentes.curriculares');
        Route::get('/componentes/{id}', 'ComponentesController@getById')->name('obter.componentes');
        Route::put('/componentes/{id}', 'ComponentesController@update')->name('atualizar.componentes');
        Route::get('/componentes/search/{termo}', 'ComponentesController@search')->name('buscar.componentes');
        Route::get('/componentes/autocomplete/{term}', 'ComponentesController@autocomplete')->name('autocompletar.componentes');

        /** COMPONENTES CATEGORIAS*/
        Route::post('/componentescategorias', 'CurricularComponentCategoryController@create')->name('criar.componentes-categoria.curriculares');
        Route::get('/componentescategorias/{id}', 'CurricularComponentCategoryController@getById')->name('obter.componentes-categoria');
        Route::get('/componentescategorias/search/{termo}', 'CurricularComponentCategoryController@search')->name('buscar.componentescategorias');
        Route::put('/componentescategorias/{id}', 'CurricularComponentCategoryController@update')->name('atualizar.componentescategorias');
        Route::delete('/componentescategorias/{id}', 'CurricularComponentCategoryController@delete')->name('deletar.componentescategorias');
        Route::get('/componentescategorias/autocomplete/{term}', 'CurricularComponentCategoryController@autocomplete')->name('autocompletar.tag');

        /**NIVEL ENSINO**/
        Route::get('/nivelensino/search/{termo}', 'NivelEnsinoController@search')->name('buscar.nivelensino');

        /** AUTENTICACAO */
        Route::post('/auth/logout', 'AuthController@logout')->name('sair');
        Route::post('/auth/refresh', 'AuthController@refresh')->name('refrescar.token');
        Route::get('/auth/links-admin', 'AuthController@linksAdmin')->name('links.admin');

        /** TIPOS */
        Route::post('/tipos', 'TipoController@create')->name('criar.tipos');
        Route::put('/tipos/{id}', 'TipoController@update')->name('atualizar.tipos');
        Route::delete('/tipos/{id}', 'TipoController@delete')->name('deletar.tipos');

        /** ROLES */
        Route::get('/roles', 'RoleController@index')->name('listar.roles');
        Route::get('/roles/{id}', 'RoleController@getById')->name('obter.roles');
        Route::post('/roles', 'RoleController@create')->name('criar.role');
        Route::put('/roles/{id}', 'RoleController@update')->name('atualizar.role');
        Route::delete('/roles/{id}', 'RoleController@delete')->name('deletar.role');
        Route::get('/roles/search/{term}', 'RoleController@search')->name('busca.role');
        /** USUARIOS */
        Route::get('/usuarios/search/{termo}', 'UserController@search')->name('usuario.buscar');
        Route::delete('/usuarios/{id}', 'UserController@delete')->name('usuario.apagar');
        Route::get('/usuarios/{id}', 'UserController@getById')->name('user.x.id');
        Route::get('/usuarios', 'UserController@index')->name('usuario.listar');
        Route::put('/usuarios/{id}', 'UserController@update');
        Route::put('/usuarios/reset-password', 'UserController@resetPass')->name('senha.atualizar');
        Route::post('/usuarios', 'UserController@create')->name('adicionar.usuario');
        /** APLICATIVOS */
        Route::post('/aplicativos', 'AplicativoController@create')->name('adicionar.aplicativo');
        Route::put('/aplicativos/{id}', 'AplicativoController@update')->name('aplicativo.editar');
        Route::delete('/aplicativos/{id}', 'AplicativoController@delete')->name('aplicativo.apagar');
        /** APLICATIVOS CATEGORIES */
        Route::post(
            '/aplicativos/categories',
            'AplicativoCategoryController@create'
        )->name('criar.aplicativo.categorias');
        Route::put('/aplicativos/categories/{id}', 'AplicativoCategoryController@update')
            ->name('atualizar.aplicativo.categorias');
        Route::delete('/aplicativos/categories/{id}', 'AplicativoCategoryController@delete')
            ->name('apagar.aplicativo.categorias');
        /** TAGS */
        Route::get('/tags', 'TagController@index')->name('lista.tag');
        Route::post('/tags', 'TagController@create')->name('adicionar.tag');
        Route::get('/tags/search/{term}', 'TagController@search')->name('busca.tag');
        Route::get('/tags/autocomplete/{term}', 'TagController@autocomplete')->name('autocompletar.tag');
        Route::put('/tags/{id}', 'TagController@update')->name('atualizar.tag');
        Route::delete('/tags/{id}', 'TagController@delete')->name('apagar.tag');
        /** CONTEUDOS */
        Route::post('/conteudos', 'ConteudoController@create')->name('adicionar.conteudo');
        Route::put('/conteudos/{id}', 'ConteudoController@update')->name('atualizar.conteudo');
        Route::delete('/conteudos/{id}', 'ConteudoController@delete')->name('apagar.conteudo');
        Route::post('/conteudos/arquivos', 'ConteudoController@storeFiles')->name('salvar.arquivo.conteudo');
        /** CANAIS */
        Route::get('/canais', 'CanalController@index')->name('listar.canais');
        Route::post('/canais', 'CanalController@create')->name('adicionar.canal');
        Route::put('/canais/{id}', 'CanalController@update')->name('atualizar.canal');
            //->middleware('can:update,canal');
        Route::delete('/canais/{id}', 'CanalController@delete')->name('apagar.canal');
        Route::get('/canais/{id}', 'CanalController@getById')->name('listar.canal.x.id');
        Route::get('/canais/search/{term}', 'CanalController@search')->name('buscar.canal');
        /** LICENCAS */
        Route::get('/licencas/search/{term}', 'LicenseController@search')->name('buscar.licenca');
        Route::get('/licencas/{id}', 'LicenseController@getById')->name('obter.licenca');
        Route::post('/licencas', 'LicenseController@create')->name('adicionar.licenca');
        Route::put('/licencas/{id}', 'LicenseController@update')->name('atualizar.licenca');
        Route::delete('/licencas/{id}', 'LicenseController@delete')->name('apagar.licenca');
        /** DENUNCIAS */
        Route::get('/contato', 'ContatoController@index')->name('listar.faleconosco');
        Route::get('/contato/{id}', 'ContatoController@getById')->name('busca.x.id');
        Route::delete('/contato/{id}', 'ContatoController@delete')->name('apagar.contato');
        /** OPTIONS */
        Route::post('/options', 'OptionsController@create')->name('criar.opcoes');
        Route::put('/options/{name}', 'OptionsController@update')->name('atualizar.opcoes.x.nome');
        Route::delete('/options/{name}', 'OptionsController@delete')->name('apagar.opcoes.x.nome');
        Route::post('/options/destaques/', 'OptionsController@createDestaques')->name('cria.destaques');
        Route::get('/options/id/{id}', 'OptionsController@getById')->name('opcao.x.id');
        /** ANALYTICS */
        Route::get('/resumo', 'HomeController@getAnalytics')->name('catalogacao.blog.e.plataforma');
        /** RELATÓRIOS */
        Route::get(
            '/usuarios/role/{role_id}',
            'RelatorioController@buscarUsuariosPorRole'
        )->name('view.relatorio.usuario');
        Route::get(
            '/relatorio/conteudos/{flag}',
            'RelatorioController@gerarPdfConteudo'
        )->name('gerar.relatorio.conteudo');
        Route::get(
            '/relatorio/usuarios/role/{role_id}/{is_active?}',
            'RelatorioController@gerarPdfUsuario'
        )->name('gerar.relatorio.usuario');
        /** SISTEMA DE PASTA */
        Route::get('/informacoes-pasta', 'FileController@getInfoFolder')->name('file.getInfoFolder');
        Route::get('/arquivos-existe', 'FileController@fileExistInBase')->name('file.fileExistInBase');
        Route::post('/converter-para-imagem', 'FileController@convertPdfToImage')->name('file.convertPdfToImage');
        /** COMENTARIOS */
        Route::post('/comentarios/create', 'ComentarioController@create')->name('comentario.create');
        Route::post('/comentarios/update/{id}', 'ComentarioController@update')->name('comentario.update');
        Route::get('/comentarios/{id}', 'ComentarioController@getComentarioById')->name('comentario.id');
        Route::get(
            '/comentarios/usuario/{idUsuario}/{tipo?}',
            'ComentarioController@getComentariosByIdUsuario'
        )->name('comentario.usuario');
        Route::get(
            '/comentarios/postagem/{id}/{tipo}',
            'ComentarioController@getComentariosByIdPostagem'
        )->name('comentario.postagem');
        Route::get('/comentarios/delete/{id}', 'ComentarioController@deletar')->name('comentario.delete');
        /** LIKE - DESLIKE */
        Route::post('/like', 'ConteudoLikeController@like')->name('like');
        Route::post('/deslike', 'ConteudoLikeController@deslike')->name('deslike');
        Route::get(
            '/likes/usuario/{idUsuario}/{tipo?}',
            'ConteudoLikeController@getLikesPorIdUsuarioEtipo'
        )->name('likes.usuario');
    }
);