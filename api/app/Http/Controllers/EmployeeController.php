<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Designer;
use App\Models\EmployeesPerCompany;
use App\Models\Programmer;
use Illuminate\Http\Request;

class EmployeeController extends Controller{
    /**
     * Mostrar todos los empleados
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index() {
        return response()->json(Employee::all());
    }

    /**
     * Agregar Empleado
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(Request $request) {
        $request->validate([
            'name' => 'required',
            'last_name' => 'required',
            'age' => 'required',
        ]);

        $employee = new Employee([
            'name' => $request->get("name"),
            'last_name' => $request->get("last_name"),
            'age' => (int)$request->get("age")
        ]);
        $employee->save();

        $employeeCompany = new EmployeesPerCompany([
            'employee_id' => $employee->id,
            'company_id' => 1
        ]);
        $employeeCompany->save();

        if ($request->get("type") === "1") {
            $designer = new Designer([
                'employee_id' => $employee->id,
                'type' => $request->get("value")
            ]);
            $designer->save();
        } else {
            $programmer = new Programmer([
                'employee_id' => $employee->id,
                'language' => $request->get("value")
            ]);
            $programmer->save();
        }

        return response()->json(["status" => 200]);
    }

    /**
     * Buscador por id
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id) {
        return response()->json(Employee::find($id));
    }

    /**
     * Ver promedio de edad de los empleados
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function average() {
        $avgEmployees = Employee::avg("age");

        return response()->json(["age"=>round($avgEmployees, 0)]);
    }

    /**
     * Ver total de empleados
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function total() {
        $totEmployees = Employee::count();

        return response()->json([$totEmployees]);
    }
}
