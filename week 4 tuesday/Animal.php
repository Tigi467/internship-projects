<?php

class Animal
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function makeSound()
    {
        return "Animal makes a sound";
    }
}

class Dog extends Animal
{
    public function makeSound()
    {
        return "Woof! Woof!";
    }
}

$dog = new Dog("Buddy");

echo "Name: " . $dog->name . "\n";
echo "Sound: " . $dog->makeSound();
