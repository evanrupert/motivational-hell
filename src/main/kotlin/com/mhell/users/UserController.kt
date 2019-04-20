package com.mhell.users

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("users")
class UserController {
    @GetMapping
    fun all(): List<User> = UserRepo.all()

    @PostMapping
    fun create(@RequestBody user: User): User {
        UserRepo.create(user)

        return UserRepo.find(user.id)
    }
}