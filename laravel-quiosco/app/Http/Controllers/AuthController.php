<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegistroRequest;

class AuthController extends Controller
{
  
     public function register(RegistroRequest $request)
    {
        // validar el registro. De una vez con validate entra a rules del otro archivo
        $data = $request->validated();
        
        // return view('auth.register');

        // crear el usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']), // Encriptar la contraseña
        ]);

        // retornar una respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }
    public function login(Request $request)
    {
        return view('auth.login');
    }
      public function logout(Request $request)
    {
    
        return redirect()->route('login');
    }
 
}
