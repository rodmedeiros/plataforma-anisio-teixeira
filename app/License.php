<?php

namespace App;

use App\Traits\UserCan;
use Illuminate\Database\Eloquent\Model;
use App\Conteudo;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Facades\Storage;

class License extends Model
{
    use UserCan;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'site', 'parent_id',
    ];
    protected $appends = ['user_can', 'image'];
    public function conteudo()
    {
        return $this->belongsTo(Conteudo::class, 'license_id');
    }

    public function childs()
    {
        return $this->hasMany(\App\License::class, 'parent_id', 'id');
    }

    public function parent()
    {
        return $this->hasOne(\App\License::class, 'id', 'parent_id');
    }

    /**
     * obtem url da imagem associada
     * @return string
     */
    function getImageAttribute(){
        //return $urlPath;
        $filename = basename($this->refenciaImagemAssociada());
        return Storage::disk("conteudos-digitais")->url("imagem-associada/licencas/".$filename); 
    }

    /**
     * obtem referencia do arquivo de imgame associada
     * da categoria do conteudo em questão
     * @return string
     */
    function refenciaImagemAssociada()
    {
        if(!$this->id)
        return null;
        $urlPath = Storage::disk("conteudos-digitais")->path("imagem-associada".DIRECTORY_SEPARATOR."licencas");
        $urlPath = $urlPath.DIRECTORY_SEPARATOR.$this->id.".*";
        $info = glob($urlPath);
        if(sizeof($info)>0)
        return $info[0]; 
        return null;
    }
}
