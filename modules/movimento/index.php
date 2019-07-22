<?
global $login,$login_unidade,$nivel;

$id_ipm=$_REQUEST['id_ipm'];
$id_sai=$_REQUEST['id_sai'];
$id_proc_outros=$_REQUEST['id_proc_outros'];

$procedimento=$_REQUEST[procedimento];

$movimento=new movimento();
$movimento->setvalues($_REQUEST[movimento],"","simples");

if ($_SESSION[debug]) pre($movimento);

if ($acao=="gravar") {
	if (!$movimento->insere($movimento,"movimento")) {
	    echo "<h2>Houve um erro ao cadastrar o movimento!</h2>";
	} else {
            if ($_REQUEST['notificar_assinantes_por_email'] == 1) {
                $notificacaoDeAMovimento = new NotificacaoDeMovimento($movimento);
                $resultadoNotificacao = $notificacaoDeAMovimento->notificar();

                if (is_array($resultadoNotificacao)){

                   if (count($resultadoNotificacao) == 0) {
                       echo "<h2>Nenhum email cadastrado para envio</h2><br />";
                   }

                    foreach ($resultadoNotificacao as $resultadoAssinante => $resultadoResultado) {
                        echo sprintf("<h2>Mensagem para %s: %s</h2>",  htmlentities($resultadoAssinante), htmlentities($resultadoResultado));
                    }

                    echo "<br />";
                }
            }
        }
}
if ($opcao=="atualizar") {
	if ($acao=="atualizar") {
		//CAP TODISCO 04/12/2013, NAO EH MAIS POSSIVEL ALTERAR MOVIMENTOS
		die("<h3>Imposs&iacute;vel atualizar movimentos</h3>");
		if (trim($movimento->descricao)=="") h3("Movimento s/ descri&ccedil;&atilde;o");
		else {
		if (movimento::atualiza($movimento)) {
			echo "<h2>Movimento atualizado com sucesso!</h2>";

			$link="?module=movimento&movimento[id_$procedimento]=".$_REQUEST[movimento]["id_$procedimento"];
			echo "<a href='$link'>Clique aqui para voltar</a>";
		}
		}
	}
	elseif ($acao=="apagar") {
		movimento::apaga($movimento);
		echo "<h2>Movimento apagado com sucesso</h2>";
		$link="?module=movimento&movimento[id_$procedimento]=".$_REQUEST[movimento]["id_$procedimento"];
		echo "<a href='$link'>Clique aqui para voltar</a>";
		log::insere ("O usuario ".$usuario->rg." apagou um movimento do procedimento $procedimento $idp ","movimento");
		die;
	}
	else {
		include("frm_atualiza.inc");
	}
die;
}


$ano=$_SESSION[sjd_ano];

$mov=$_REQUEST[movimento];

if ($mov[id_ipm]) { $procedimento="ipm"; $idp=$mov[id_ipm]; }
if ($mov[id_cj]) { $procedimento="cj"; $idp=$mov[id_cj]; }
if ($mov[id_cd]) { $procedimento="cd"; $idp=$mov[id_cd]; }
if ($mov[id_sindicancia]) { $procedimento="sindicancia"; $idp=$mov[id_sindicancia]; }
if ($mov[id_fatd]) { $procedimento="fatd"; $idp=$mov[id_fatd]; }
if ($mov[id_desercao]) { $procedimento="desercao"; $idp=$mov[id_desercao]; }
if ($mov[id_apfd]) { $procedimento="apfd"; $idp=$mov[id_apfd]; }
if ($mov[id_iso]) { $procedimento="iso"; $idp=$mov[id_iso]; }
if ($mov[id_it]) { $procedimento="it"; $idp=$mov[id_it]; }
if ($mov[id_adl]) { $procedimento="adl"; $idp=$mov[id_adl]; }
if ($mov[id_sai]) { $procedimento="sai"; $idp=$mov[id_sai]; }
if ($mov[id_proc_outros]) { $procedimento="proc_outros"; $idp=$mov[id_proc_outros]; }

if ($procedimento!=="proc_outros") 
{
	$sql="SELECT * FROM $procedimento
	LEFT JOIN andamento ON andamento.id_andamento=$procedimento.id_andamento
	LEFT JOIN andamentocoger ON andamentocoger.id_andamentocoger=$procedimento.id_andamentocoger
	WHERE (id_$procedimento = '$idp')
	LIMIT 0,1";
}
else
{
	$sql="SELECT * FROM $procedimento
	WHERE (id_$procedimento = '$idp')
	LIMIT 0,1";
}


$resultado=@mysql_query($sql);
$row=@mysql_fetch_array($resultado);

include ("formulario.inc.php");

?>
