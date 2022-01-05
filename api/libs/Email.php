<?php

require_once 'PHPMailer/PHPMailerAutoload.php';

class Email {

    protected $_user = 'omicron.project.manager@gmail.com';

    protected $_pass = 'Omicron2022-AIEP-Excel';

    protected $_smtp_host = 'smtp.gmail.com';

    protected $_smtp_port = 587;

    protected $_to;

    protected $_subject;

    protected $_body;

    protected $_attachment;

    public function __construct($to = null, $subject = null, $body = null, $attachment = null)
    {
        

        $this->_to = $to;
        $this->_subject = $subject;
        $this->_body = $body;
        $this->_attachment = $attachment;
    }


    public function send()
    {
        $mail = new \PHPMailer();
		$mail->setLanguage('es');
		$mail->IsSMTP(); // telling the class to use SMTP
		
		//$mail->SMTPDebug  = 2;                         // enables SMTP debug information (for testing)
		$mail->SMTPAuth   = true;                         // enable SMTP authentication
		$mail->Host       = $this->_smtp_host;           // sets the SMTP server
		$mail->Port       = $this->_smtp_port;                      // set the SMTP port for the GMAIL server 465
		
        /* $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        ); */
		$mail->SMTPSecure = "tls"; 
		$mail->Username   = $this->_user;            // SMTP account username
		$mail->Password   = $this->_pass;               // SMTP account password
		$nombre_remitente = $this->_user;
		$mail->CharSet = 'utf-8';
		$mail->IsHTML(true);
		$mail->From = $nombre_remitente;
		$mail->FromName = 'No responder';
		$mail->Subject = $this->_subject;

        $mail->AddAddress($this->_to);
		$mail->Body = $this->_body;
		if($this->_attachment){
			if(is_array($this->_attachment)){
				foreach ($this->_attachment as $adj) {
					$mail->AddAttachment($adj);
				}
			}else{
                $mail->AddAttachment($this->_attachment);
			}
		}
        
        try{
            if ($mail->Send()) {
			    return true;
		    }else{
                return false;
		    }
        }catch(Exception $e){
            error_log($e->getMessage());
        }
    }

}