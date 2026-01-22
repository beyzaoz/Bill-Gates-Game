Bill Gates Spending Game

This project is a simple interactive web application inspired by the idea of spending Bill Gates’ fortune. Users can buy and sell various products while tracking the remaining balance in real time.

Features

The application starts with an initial balance of $100,000,000,000.

A list of products is displayed. Products can be:

Based on the demo

Or completely fictional, defined by the developer

Each product has a clearly defined price.

Buying & Selling Logic

When a product is purchased, Bill Gates’ balance decreases accordingly.

When a product is sold, Bill Gates’ balance increases accordingly.

The Buy button is disabled if:

The product price is higher than the current balance.

The Sell button is disabled if:

The user has not purchased that product yet (quantity is zero).

Purchased Products List

All purchased products are listed at the bottom of the screen.

For each purchased product, the following information is shown:

Product name

Quantity purchased

Total cost for that product

Goal

The goal of this project is to practice front-end development concepts such as:

State management

Conditional rendering

User interaction handling

Dynamic UI updates based on business rules
