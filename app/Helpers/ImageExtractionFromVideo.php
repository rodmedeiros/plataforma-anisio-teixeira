<?php 
namespace App\Helpers;

/*
* Esta classe é usada para extrair frame de um vídeo utilizando comandos do Software FFmpeg
* Forma da extração: Extrai um frame por video de forma aleatória, ou seja, extrai qualquer frame do vídeo.
* Obs: É necessário ter o FFmpeg instalado e configurado no seu embiente de execução
*/
class ImageExtractionFromVideo
{
	protected $imageSize;
	protected $videoPath;
	protected $imagePathDestination;
	protected $videoId;

	public function __construct()
	{
		# vga = 640×480
		$this->imageSize = 'vga';
	}
    
    /**
    * Recebe o id do Video, este id é usado para formar o nome da imagem que será gerada
    * @return void
    */
	public function setVideoId($videoId)
	{
		$this->videoId = $videoId;
	}
    
    /**
    * Seta o tamanho que a imagem tera ao ser gerada
    * @return void
    */
	public function setImageSize($size)
	{
		$this->imageSize = $size;
	}
    
    /**
    * Seta o caminho completo do video juntamente com a extensao
    * @return void
    */
	public function setVideoPath($path)
	{
		$this->videoPath = $path;
	}
    
    /**
    * Seta o caminho em que a imgem gerada será salva
    * @return void
    */
	public function setImagePathDestination($pathDestination)
	{
		$this->imagePathDestination = $pathDestination;
	}
    
    /**
    * Realiga a extração da imagem utilizando comando do software FFmpeg
    * @return void
    */
	public function extract()
	{
		# Executa o comando três vezes e extrai uma imagem em momentos diferentes após o inicio do video
		$this->realXtract('30');
		$this->realXtract('40');
		$this->realXtract('50');
	}
    
    /**
    * Metodo interno que executa o comando FFmpeg
    * @param $seconds: Representa a quantos segunos após o inicio do video as imagens serão extraidas
    */
	private function realXtract($seconds)
	{
		shell_exec("ffmpeg -itsoffset -{$seconds} -i {$this->videoPath} -r 1 -s {$this->imageSize} -f image2 -vframes 1 {$this->imagePathDestination}/{$this->createImageName()}-%03d.jpeg");
	}
    
    /**
    * Cria um nome para a imagem que será salva
    * @return String
    */
	private function createImageName()
	{
		return $this->videoId.'.'.rand();
	}
}