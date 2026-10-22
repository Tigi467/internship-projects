<?php

class BankAccount
{
    private $balance;

    public function __construct($balance)
    {
        $this->balance = $balance;
    }

    public function deposit($amount)
    {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function getBalance()
    {
        return $this->balance;
    }
}

$account = new BankAccount(1000);
$account->deposit(500);

echo "Current balance: " . $account->getBalance();
