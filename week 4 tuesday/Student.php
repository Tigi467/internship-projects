<?php

class Student
{
    public $name;
    public $age;

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce()
    {
        return "My name is $this->name and I am $this->age years old.";
    }
}

$student1 = new Student("Sara", 22);

echo $student1->introduce();
