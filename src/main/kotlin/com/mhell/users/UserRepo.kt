package com.mhell.users

import com.mhell.Repo
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.selectAll

object UserRepo : Repo() {

    object Users : Table("users") {
        val id = uuid("id")
        val email = varchar("email", 255)
        val password = varchar("password", 255)
        val balance = decimal("balance", 2, 2)

        fun toUser(row: ResultRow): User =
            User(
                id = row[Users.id],
                email = row[Users.email],
                password = row[Users.password],
                balance = row[Users.balance]
            )
    }

    fun all(): List<User> = query {
        Users.selectAll().map(Users::toUser)
    }
}