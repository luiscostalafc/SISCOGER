<form action="?module=debug" method="POST">
<table width="100%" class="bordasimples">
	<tr><TD colspan="2"><h2>Escolha a op��o de Debug</h2></TD></tr>
	<TR><TD>Modo de testes</TD><td><input type="submit" name="opcao" value="Debug"></td></TR>
	<tr><TD>Classes utilizadas</TD><td><input type="submit" name="opcao" value="Classes"></td></tr>
	<tr><TD colspan="2"><h2>Modificar $_SESSION[user]</h2></TD></tr>
	<tr><TD>N�vel:<input type="text" size="3" maxlength="3" name="user[nivel]"></TD><td><input type="submit" name="opcao" value="user"></td></tr>
	<tr><TD colspan="2"><h2>Modificar opm_login</h2></TD></tr>
	<TR><TD>Novo c�digo: <input type="text" size="8" maxlength="8" name=opm_login></TD><td><input type="submit" name="opcao" value="opm_login"></td></TR>
	<tr><TD colspan="2"><h2>Getform</h2></TD></tr>
	<TR><TD>URL: <input type="text" size="40" name=formulario></TD><td><input type="submit" name="acao" value="getform"></td></TR>
	<tr><TD colspan="2"><h2>Criar modulo</h2></TD></tr>
	<TR><TD>Novo modulo: <input type="text" size="20" name='novomodulo'><br>
	Nome legivel: <input type="text" size="20" name='nomelegivel'><br>
	Nome legivel no plural: <input type="text" size="20" name='nomeplural'></TD><td><input type="submit" name="acao" value="criarmodulo"></td></TR>
</table>
</form>