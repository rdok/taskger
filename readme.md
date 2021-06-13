# Taskger

> This is an implementation of [The Complete Node.js Developer Course][udemy_course_link].   
> 
> **However**, I'm using it as a kata 🥋 . To practise & hone the skills used for day to day work. Starting from tests, code, CI/CD, up to including releasing test & prod environments.

[![CI/CD][cicd_badge]][cicd]
[![test-site][test_site_badge]][test_site]
[![prod-site][prod_site_badge]][prod_site]

### App features

- Use Mongo database to store users, and tasks
- Restful API
- User auth
- User files
- Email notifications & more

## Develop

See `Makefile`

[cicd]: https://github.com/rdok/taskger/actions/workflows/cicd.yml
[cicd_badge]: https://github.com/rdok/taskger/actions/workflows/cicd.yml/badge.svg
[test_site_badge]: https://img.shields.io/badge/test-green?style=flat-square&logo=heroku
[test_site]: https://rdok-test-taskger.herokuapp.com/
[prod_site_badge]: https://img.shields.io/badge/prod-orange?style=flat-square&logo=heroku
[prod_site]: https://rdok-prod-taskger.herokuapp.com/
[udemy_course_link]: https://www.udemy.com/course/the-complete-nodejs-developer-course-2/
