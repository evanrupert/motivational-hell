package com.mhell.users

import com.mhell.Repo
import org.jetbrains.exposed.sql.*
import java.util.*

object UserRepo : Repo() {

    object Users : Table("users") {
        val id = varchar("id", 36)
        val email = varchar("email", 255)
        val password = varchar("password", 255)
        val balance = decimal("balance", 12, 2)

        fun toUser(row: ResultRow): User =
            User(
                id = row[id],
                email = row[email],
                password = row[password],
                balance = row[balance]
            )
    }

    fun all(): List<User> = query {
        Users.selectAll().map(Users::toUser)
    }

    fun find(id: String): User = query {
        Users.select { Users.id eq id }.map(Users::toUser).first()
    }

    fun create(user: User) = query {
        Users.insert {
            it[id] = user.id
            it[email] = user.email
            it[password] = user.password
            it[balance] = user.balance
        }
    }

    fun update(user: User) = query {
        Users.update({ Users.id eq user.id }) {
            it[email] = user.email
            it[password] = user.password
            it[balance] = user.balance
        }
    }

    fun delete(id: String) = query {
        Users.deleteWhere { Users.id eq id }
    }
}