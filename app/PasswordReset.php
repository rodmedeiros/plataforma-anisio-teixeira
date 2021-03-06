<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\UserCan;

class PasswordReset extends Model
{
    protected $table = "password_resets";

    public $timestamps = false;
    protected $primaryKey = null;
    public $incrementing = false;

    protected $fillable = [
        'email',
        'token',
        'created_at'
    ];
    
    /**
     * Recupera o token pelo email do usuário
     */
    public function getTokenByEmail($email)
    {
        return $this->where('email', $email)->orderBy("created_at","desc")->first();
    }
    
    /**
     * Recupera o token pelo proprio token
     */
    public function getToken($token)
    {
        return $this->where('token', $token)->first();
    }
}
