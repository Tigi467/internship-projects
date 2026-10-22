<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Student list retrieved successfully',
            'students' => [
                ['id' => 1, 'name' => 'Abel', 'age' => 21],
                ['id' => 2, 'name' => 'Sara', 'age' => 22],
                ['id' => 3, 'name' => 'John', 'age' => 23]
            ]
        ]);
    }

    public function show($id)
    {
        return response()->json([
            'message' => 'Student details',
            'student_id' => $id
        ]);
    }

    public function store(Request $request)
    {
        return response()->json([
            'message' => 'Student created successfully',
            'student' => $request->all()
        ], 201);
    }
}
