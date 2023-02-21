<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'email' => ['required', 'email','unique:users'],
            'password' => ['required'],
        ]);
        $user =  User::create([
            'full_name' => $request->full_name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>Hash::make($request->password),
        ]);
        Auth::login($user);
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('fuad_demo',$token,60*24); // 1 Day
        $my_feed = User::find(auth()->user()->id)->my_feed;
        //return $token;
        return response()->json([
            'message'=>'Success',
            'token'=>$token,
        ])->withCookie($cookie);
    }
    public function user(){
        return Auth::user();
    }
    public function login(Request $request){


        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('fuad_demo',$token,60*24); // 1 Day
            $my_feed = User::find(auth()->user()->id)->my_feed;
            //return $token;
            return response()->json([
                'message'=>'Success',
                'token'=>$token,
            ])->withCookie($cookie);
        }

        return response()->json([
            'errors' => [
                'auth_error' => 'The provided credentials do not match our records.',
            ]
        ], Response::HTTP_UNAUTHORIZED);
    }
    public function do_login(){
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('fuad_demo',$token,60*24); // 1 Day
        $my_feed = User::find(auth()->user()->id)->my_feed;
        //return $token;
        return response()->json([
            'message'=>'Success',
            'token'=>$token,
        ])->withCookie($cookie);
    }
    public function logout(){
        $cookie = Cookie::forget('fuad_demo');
        return response()->json([
            'message'=>'Success'
        ])->withCookie($cookie);
    }
}
