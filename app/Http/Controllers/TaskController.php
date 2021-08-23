<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $tasks = DB::table('tasks')->where('user_id', Auth::user()->id)->get();
    
            return response()->json($tasks, 200);
        } catch (Exception $e) {
            throw new Exception($e->getMessage);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $task = new Task();

            $task->user_id = Auth::user()->id;
            $task->name = $request->name;
            $task->description = $request->description;
            $task->finish_date = $request->finish_date;

            $task->save();

            return response()->json("Task added successfully", 200);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        try {
            $task = Task::find($request->id);
    
            $task->name = $request->name;
            $task->description = $request->description;
            $task->finish_date = $request->finish_date;
    
            $task->save();
    
            return response()->json("Task updated successfully", 200);
        } catch (Exception $e) {
            throw new Exception($e->getMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        try {
            DB::table('tasks')->where('id', $id)->where('user_id', Auth::user()->id)->delete();
    
            return response()->json("Task deleted successfully", 200);
        } catch (Exception $e) {
            throw new Exception($e->getMessage);
        }
    }
}
