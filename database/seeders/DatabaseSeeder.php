<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\DashUser::factory()->create([
            'first_name' => 'Client John',
            'last_name' => 'Doe',
            'email' => 'JohnDoe@client.com',
            'password' => bcrypt('password'),
            'store_id' => 133005 //The Conqueror
        ]);

        \App\Models\DashUser::factory()->create([
            'first_name' => 'Admin Peter',
            'last_name' => 'Park',
            'email' => 'PeterPark@admin.com',
            'password' => bcrypt('password'),
            'store_id' => 133005, //The Conqueror
            'is_admin' => 1
        ]);
    }
}
