import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  private readonly expenses = [];

  create(expense: CreateExpenseDto) {
    const newExpense = {
      id: this.expenses.length + 1,
      name: expense.name,
      amount: expense.amount,
    };
    this.expenses.push(newExpense);
    return this.expenses;
  }

  findAll() {
    return this.expenses;
  }

  findOne(id: number) {
    const expense=this.expenses.find(i=>i.id===id);
    if(!expense){
      throw new HttpException("expense not found",HttpStatus.BAD_REQUEST);
    }
    return expense;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = this.expenses.find((i) => i.id === id);
    if (expense) {
      Object.assign(expense, updateExpenseDto);
      return expense;
    }
    return null;
  }

  remove(id: number) {
    const index = this.expenses.findIndex((i) => i.id === id);
    if (index !== -1) {
      return this.expenses.splice(index, 1);
    }
    return null;
  }
}
