package com.mhell

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.jetbrains.exposed.sql.Database
import org.springframework.context.annotation.Profile
import org.springframework.stereotype.Component

@Component
@Profile("default")
class DevDatabase : MhellDatabase {
    override val connect by lazy {
        println("Connecting to DEV database")
        Database.connect(hikari())
    }

    private fun hikari(): HikariDataSource {
        val dbUser = System.getenv("MHELL_DB_USERNAME") ?: ""
        val dbPassword = System.getenv("MHELL_DB_PASSWORD") ?: ""

        val config = HikariConfig()
        config.driverClassName = "org.postgresql.Driver"
        config.jdbcUrl = "jdbc:postgresql://localhost:5432/mhell"
        config.username = dbUser
        config.password = dbPassword
        config.maximumPoolSize = 3
        config.isAutoCommit = false
        config.transactionIsolation = "TRANSACTION_REPEATABLE_READ"
        config.validate()
        return HikariDataSource(config)
    }
}
