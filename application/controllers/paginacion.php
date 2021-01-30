<?php
class paginacion extends CI_Controller{
    public function Index(){
        $this->load->view('paginacion/index');
      
    }

    public function pag2(){
        $this->load->view('paginacion\pag2');
    }
}
?>