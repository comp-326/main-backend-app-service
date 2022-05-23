import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
	knex.table('Student').column('');
}


export async function down(knex: Knex): Promise<void> {
	knex.table('Student').column('');
}

