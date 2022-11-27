import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from './searchPage';

Given("I'm open dasboard page", ()=>{
    SearchPage.visit()
})

When("I input field data on search box", ()=>{
    SearchPage.search('online')
})

Then("I should see the results", ()=>{
    SearchPage.result()
})