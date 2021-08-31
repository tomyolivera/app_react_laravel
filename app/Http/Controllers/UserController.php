<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

//TODO Validate fields

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        if($user){   
            // return $this->show($user->id);
            return response()->json($user, 200);
        }
    }

    // public function isLoggedIn()
    // {
    //     return Auth::user() !== null;
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password) || '',
        ]);

        return response()->json("User created successfully", 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $user = User::find($id);

        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $user = User::find($id);

        if($request->password)
            return $this->changePassword($request, $user);

        if($request->disabled !== null)
            return $this->disable($request, $user);

        $user->email = $request->email;
        $user->name = $request->name;
        $user->status = $request->status;

        $user->save();

        return response()->json("Updated successfully", 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function changePassword(Request $request, User $user)
    {   
        if(!Hash::check($request->actualpassword, $user->password))
            return response()->json("That's not your actual password!", 201);
        
        if(Hash::check($request->password, $user->password))
            return response()->json("The new password is the same as the one you used", 201);

        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json("Updated successfully", 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if(Auth::user()->id === $id){
            User::find($id)->delete();
            return response()->json("Deleted successfully", 200);
        }

        return response()->json("You are not allowed to delete this user", 403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function disable(Request $request, User $user)
    {
        if(!Hash::check($request->password, $user->password))
            return response()->json("That's not your actual password!", 201);

        if(Auth::user()->id === $user->id){
            $user->disabled = !$request->disabled;
            $user->save();

            return response()->json(
                $request->disabled ? "Disabled" : "Enabled" . " successfully",
                200
            );
        }

        return response()->json("You are not allowed to disable this user", 403);
    }
}
