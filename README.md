
# Project Title
Invest Like the best
My app plans to utilize the SEC’s API to gather this info, and display it in a digestible and engaging manner utilizing some simple data visualization techniques. Users will be able to view various metrics relating these funds holdings, and recent trading activities, and will be able to make more informed decisions with their own savings.


## 🚀 About Me
I'm a full stack developer trying to manange my own portfolio so my money turns into more money.

## API Reference

#### Get most held stocks

```http
  GET /company/${period_of_report}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| 'period_of_report' | 'string' | Called upon component mounting in top stocks chart page |

#### Get specific company data per specific quarter

```http
  GET /company/${cusip}/${period_of_report}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cusip`, `period_of_report`| `string` | **Required**. Id of company & quarter to fetch specific data |

#### Get list of all investors

```http
  GET /funds/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| n/a| n/a | gets called upon component mounting for fund list page |

#### Get specific company data per specific quarter

```http
  GET /funds/${CIK}/${period_of_report}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `CIK`, `period_of_report`| `string` | **Required**. Id of fund & quarter to fetch specific data |



## Tech Stack

**Client:** React, Sass, D3

**Server:** Node, Express, Knex

## Roadmap

- I want to deploy this app
- I want to add user auth, so users can upload their portfolios & watchlists, and then allow those to persist in a DB.


## Lessons Learned

What did you learn while building this project?

I found that while database design can feel simple in theory it can become a lot more complex quickly. I did find this very enjoyable. 

What challenges did you face and how did you overcome them?
<div>D3 was much more challenging and time consuming than i initailly anticipated it would. With persistence I did achieve the layout I was hoping for, however, I may have searched up an easier package to prioritize other features.</div>

## Installation

To run this app one could clone the the file, and recreate the DB in a local mysql and run all the knex migrations as well as seed.
After that, npm install all the dependencies and it should work.
