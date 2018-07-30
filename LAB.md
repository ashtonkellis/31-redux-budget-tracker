## Requirements  
#### Feature Tasks 
##### expense
* in this app an expense should contain at least the following properties
  * `id` a uuid
  * `categoryID` an id that corresponds to an existing category
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the expense
  * `price` a number that is the price of the expense 
  * feel free to add more to your expense if you want

###### app reducer
* export a reducer that holds the entire app state from `reducer/main.js`
* create a reducer that will combine your `categories` reducer and `expenses` reducer

###### expenses reducer
* create a category reducer in your your reducer directory
* this reducer should at least support the following interactions 
  * `EXPENSE_CREATE` -- store an expense
  * `EXPENSE_UPDATE` -- update an existing expense
  * `EXPENSE_DELETE` -- delete an existing expense
* if you need others feel free to add them

###### action creaters
* you should create an action creater for each interaction supported by your expenses reducer

###### middleware
* Add a redux-reported middleware to your store
  * it should log actions and the state updates
  * it should wrap the updating of the store in a `try/catch` and gracefully log errors

##### Components
Create the following components and structure them according to the following diagram.  
``` 
Provider 
  App
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category] -- list of Category items
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense
```

###### Update the Category Component
* should keep all of the features described in lab-31
* add an ExpenseForm to your category item that enables the user to create expenses on your app state
* display list all the ExpenseItems belonging to the category

##### ExpenseForm Component 
* should have an `onComplete` prop that will be invoked with the form state on submit
* it should support create and update

##### ExpenseItem Component 
* should have a button that will delete the expense from the appState `onClick`
* should display the `name` and `price` of the component
* should display an ExpenseForm that will enable the user to update the expense in the app state

#### Testing
* Use Cypress to test your app with the following scenario:
  * Create a new category item
  * Create a new expense related to that category item
  * Delete the entire category, which should also delete any related expenses
  * Use any combination of [assertions methods](https://docs.cypress.io/guides/references/assertions.html#). You will get full points for testing if a TA can run your test suite in Cypress and see the full scenario occur. 

####  Documentation  
Write a description of the project in your README.md
