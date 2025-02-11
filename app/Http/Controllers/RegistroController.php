<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistroController extends Controller
{
    public function index()
    {
        $files = Registro::all();
        return Inertia::render('Index', ['files' => $files]);
    }
}
