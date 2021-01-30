<?php
class Home extends CI_Controller{

    public function index(){
        // Paginas a cargar para el home 
        $data['titulo'] = 'Pagina Principal';//Para cambiar el titulo de cada pagina
       $this->load->view('plantillas/header', $data);
       $this->load->view('home');
       $this->load->view('paginacion/index');//Aqui esta la paginacion 
       $this->load->view('plantillas/footer');
      
    }
}

