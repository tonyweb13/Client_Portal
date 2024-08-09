<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }

        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials, $request->filled('remember'))) {
            return response()->json(['status' => true, 'user' => auth()->user()]);
        }

        return response()->json(['status' => false, 'message' => 'Invalid email or password'], 500);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['status' => true, 'message' => 'logged out']);
    }

    public function loginUser()
    {
        $dummyWidgets = [
            [
                "title" => "Invoices",
                "total" => "Open Balance",
                "totalValue" => "$1,000",
            ], [
                "title" => "Awaiting Shipments",
                "total" => "Total",
                "totalValue" => "12",
            ], [
                "title" => "Bad Address",
                "total" => "Total Bad Address",
                "totalValue" => "158",
            ], [
                "title" => "Pending CPF",
                "total" => "Total",
                "totalValue" => "118",
            ], [
                "title" => "Delayed",
                "total" => "Total USPS Delayed Shipment",
                "totalValue" => "2,270",
            ], [
                "title" => "Returns",
                "total" => "Total Returns",
                "totalValue" => "28",
            ]
        ];
        return response()->json(['widgets' => $dummyWidgets, 'status' => true, 'user' => auth()->user()]);
    }
}
