<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ImportData extends Command
{
    /**
     * Nome e asinatura do comando
     *
     * @var string
     */
    protected $signature = 'import:data';

    /**
     * Descrição do comando
     * @var string
     */
    protected $description = 'Carga do Banco de dados';

    /**
     * Criar uma nova instância do commando
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Executar o comando
     *
     * @return mixed
     */
    public function handle()
    {
        $files = array_sort(File::files(storage_path('dumps')), function ($file) {
            return $file->getFilename();
        });
        $this->info('Importando dados esper um momento...');

        foreach ($files as $file) {
            if ($file->getExtension() == 'json') {
                $filename = pathinfo($file, PATHINFO_FILENAME);
                $data = file_get_contents($file);
                DB::statement("insert into options (name, meta_data) values ('$filename','$data')");
                $option = strtoupper($filename);
                $this->info("Opção: {$option} criada com sucesso!!");
            } else {
                DB::statement("COPY {$file->getExtension()} FROM '{$file->getPathname()}' DELIMITER '*';");
                $tabela = strtoupper($file->getExtension());
                $this->line("Tabela: $tabela copiada com successo!!");
            }
        }
        $this->info('Reiniciando sequencias');
        DB::statement("ALTER SEQUENCE users_id_seq RESTART WITH 2675;");
        DB::statement("ALTER SEQUENCE canais_id_seq RESTART WITH 16;");
        DB::statement("ALTER SEQUENCE tags_id_seq RESTART WITH 15018;");
        DB::statement("ALTER SEQUENCE aplicativos_id_seq RESTART WITH 126;");
        DB::statement("ALTER SEQUENCE conteudos_id_seq RESTART WITH 12000;");
        DB::statement("ALTER SEQUENCE licenses_id_seq RESTART WITH 14;");
        DB::statement("ALTER SEQUENCE categories_id_seq RESTART WITH 69;");
        DB::statement("ALTER SEQUENCE aplicativo_categories_id_seq RESTART WITH 16;");
        DB::statement("ALTER SEQUENCE niveis_ensino_id_seq RESTART WITH 12;");
        DB::statement("ALTER SEQUENCE roles_id_seq RESTART WITH 8;");
        DB::statement("ALTER SEQUENCE aplicativo_categories_id_seq RESTART WITH 40;");
        DB::statement("ALTER SEQUENCE tipos_id_seq RESTART WITH 20;");


        $this->info('Atualizando Canais');
        DB::statement("UPDATE conteudos set canal_id = 6 where is_site = false and canal_id is null;");
        DB::statement("UPDATE conteudos set canal_id = 5 where is_site = true and canal_id is null;");
        DB::statement("UPDATE canais set is_active = false where  id  IN (4,10,11,13,14,15);");
        DB::statement("UPDATE canais set name = 'Recursos Educacionais' where id = 6;");
        $this->info('Adicionando Temas contenporâneos');
        DB::statement("INSERT into curricular_components_categories (id, name) values (7,'Temas Contemporáneos');");
        DB::statement("INSERT into curricular_components (id,category_id,nivel_id,name) values 
            (119,7,null,'Educação para o Trânsito'),
            (120,7,null,'Vida Familiar e Social'),
            (121,7,null,'Educação em Direitos Humanos'),
            (122,7,null,'Direitos da Criança e do Adolescente'),
            (123,7,null,'Processo de Envelhecimento, Respeito e Valorização do Idoso'),
            (124,7,null,'Ciência e Tecnologia'),
            (125,7,null,'Trabalho'),
            (126,7,null,'Educação Financeira'),
            (127,7,null,'Educação Fiscal'),
            (128,7,null,'Educação Ambiental'),
            (129,7,null,'Educação para o Consumo'),
            (130,7,null,'Diversidade Cultural'),
            (131,7,null,'Educação para Valorização do Muliculturalismo nas Matrizes Históricas e Culturais Brasileiras'),
            (132,7,null,'Saúde'),
            (133,7,null,'Educação Alimentar e Nutricional');
        ");
        $this->info('Processo finalizado com sucesso');
    }
}
