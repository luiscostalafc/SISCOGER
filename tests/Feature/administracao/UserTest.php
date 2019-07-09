<?php

namespace Tests\Feature\administracao;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
	/**
	 * Index
	 *
	 * @return void
	 */
	public function testIndexWithError()
	{
		$response = $this->json('GET', '/usuarios', []);

		$response->assertStatus(400);

	}

	/**
	 * Index
	 *
	 * @return void
	 */
	public function testIndex()
	{
		$response = $this->json('GET', '/usuarios', []);

		$response->assertStatus(200);

	}

	/**
	 * Create
	 *
	 * @return void
	 */
	public function testCreateWithError()
	{
		$response = $this->json('GET', '/usuarios/criar', []);

		$response->assertStatus(400);

	}

	/**
	 * Create
	 *
	 * @return void
	 */
	public function testCreate()
	{
		$response = $this->json('GET', '/usuarios/criar', []);

		$response->assertStatus(200);

	}

	/**
	 * Store
	 *
	 * @return void
	 */
	public function testStoreWithError()
	{
		$response = $this->json('POST', '/usuarios/salvar', []);

		$response->assertStatus(400);

	}

	/**
	 * Store
	 *
	 * @return void
	 */
	public function testStore()
	{
		$response = $this->json('POST', '/usuarios/salvar', []);

		$response->assertStatus(200);

	}

	/**
	 * Edit
	 *
	 * @return void
	 */
	public function testEditWithError()
	{
		$response = $this->json('GET', '/usuarios/{id}/editar', []);

		$response->assertStatus(400);

	}

	/**
	 * Edit
	 *
	 * @return void
	 */
	public function testEdit()
	{
		$response = $this->json('GET', '/usuarios/{id}/editar', []);

		$response->assertStatus(200);

	}

	/**
	 * Update
	 *
	 * @return void
	 */
	public function testUpdateWithError()
	{
		$response = $this->json('PUT', '/usuarios/{id}/atualizar', []);

		$response->assertStatus(400);

	}

	/**
	 * Update
	 *
	 * @return void
	 */
	public function testUpdate()
	{
		$response = $this->json('PUT', '/usuarios/{id}/atualizar', []);

		$response->assertStatus(200);

	}

	/**
	 * Destroy
	 *
	 * @return void
	 */
	public function testDestroyWithError()
	{
		$response = $this->json('DELETE', '/usuarios/{id}/remover', []);

		$response->assertStatus(400);

	}

	/**
	 * Destroy
	 *
	 * @return void
	 */
	public function testDestroy()
	{
		$response = $this->json('DELETE', '/usuarios/{id}/remover', []);

		$response->assertStatus(200);

	}

	/**
	 * Passedit
	 *
	 * @return void
	 */
	public function testPasseditWithError()
	{
		$response = $this->json('GET', '/usuarios/{id}/senha', []);

		$response->assertStatus(400);

	}

	/**
	 * Passedit
	 *
	 * @return void
	 */
	public function testPassedit()
	{
		$response = $this->json('GET', '/usuarios/{id}/senha', []);

		$response->assertStatus(200);

	}

	/**
	 * Passupdate
	 *
	 * @return void
	 */
	public function testPassupdateWithError()
	{
		$response = $this->json('PUT', '/usuarios/{id}/senhaatualizar', []);

		$response->assertStatus(400);

	}

	/**
	 * Passupdate
	 *
	 * @return void
	 */
	public function testPassupdate()
	{
		$response = $this->json('PUT', '/usuarios/{id}/senhaatualizar', []);

		$response->assertStatus(200);

	}

	/**
	 * Block
	 *
	 * @return void
	 */
	public function testBlockWithError()
	{
		$response = $this->json('GET', '/usuarios/{id}/bloquear', []);

		$response->assertStatus(400);

	}

	/**
	 * Block
	 *
	 * @return void
	 */
	public function testBlock()
	{
		$response = $this->json('GET', '/usuarios/{id}/bloquear', []);

		$response->assertStatus(200);

	}

	/**
	 * Unblock
	 *
	 * @return void
	 */
	public function testUnblockWithError()
	{
		$response = $this->json('GET', '/usuarios/{id}/desbloquear', []);

		$response->assertStatus(400);

	}

	/**
	 * Unblock
	 *
	 * @return void
	 */
	public function testUnblock()
	{
		$response = $this->json('GET', '/usuarios/{id}/desbloquear', []);

		$response->assertStatus(200);

	}

	/**
	 * Manual
	 *
	 * @return void
	 */
	public function testManualWithError()
	{
		$response = $this->json('GET', '/usuarios/manual', []);

		$response->assertStatus(400);

	}

	/**
	 * Manual
	 *
	 * @return void
	 */
	public function testManual()
	{
		$response = $this->json('GET', '/usuarios/manual', []);

		$response->assertStatus(200);

	}

	/**
	 * Termocriar
	 *
	 * @return void
	 */
	public function testTermocriarWithError()
	{
		$response = $this->json('GET', '/usuarios/{id}/termocriar', []);

		$response->assertStatus(400);

	}

	/**
	 * Termocriar
	 *
	 * @return void
	 */
	public function testTermocriar()
	{
		$response = $this->json('GET', '/usuarios/{id}/termocriar', []);

		$response->assertStatus(200);

	}

	/**
	 * Termosalvar
	 *
	 * @return void
	 */
	public function testTermosalvarWithError()
	{
		$response = $this->json('POST', '/usuarios/{id}/termosalvar', []);

		$response->assertStatus(400);

	}

	/**
	 * Termosalvar
	 *
	 * @return void
	 */
	public function testTermosalvar()
	{
		$response = $this->json('POST', '/usuarios/{id}/termosalvar', []);

		$response->assertStatus(200);

	}

}
