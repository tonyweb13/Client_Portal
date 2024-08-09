<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->status;
        $page = $request->page;
        $perPage = 100;

        $startDate = '2020-01-01';
        $currentDate = Carbon::now()->format('Y-m-d');
        $userStoreId = auth()->user()->store_id;

        $query = 'SELECT * FROM f_dash_AllOrders(?,?,?,?)';
        $bindings = '';
        if ($status == "Awaiting Shipments") {
            $bindings = ['', $startDate, $currentDate, $userStoreId];
        } else if ($status == "Bad Address") {
            $bindings = ['HOLD - Bad Address', $startDate, $currentDate, $userStoreId];
        } else if ($status == "Hold Brazil CPF") {
            $bindings = ['HOLD - Brazil CPF', $startDate, $currentDate, $userStoreId];
        } else if ($status == "Postal Hold") {
            $bindings = ['HOLD - Postal Shutdown', $startDate, $currentDate, $userStoreId];
        }

        $results = DB::select($query, $bindings);

        $total = count($results);
        $reult_paginator = new \Illuminate\Pagination\LengthAwarePaginator(
            array_slice($results, ($page - 1) * $perPage, $perPage),
            $total,
            $perPage,
            $page,
            ['path' => \Illuminate\Pagination\Paginator::resolveCurrentPath()]
        );

        return $reult_paginator;
    }

    public function view(Request $request)
    {
        $userStoreId = auth()->user()->store_id;
        $query = 'SELECT * FROM f_dash_OrderItems(?,?)';
        $bindings = [$request->orderid, $userStoreId];
        $results = DB::select($query, $bindings);
        return $results;
    }
}
