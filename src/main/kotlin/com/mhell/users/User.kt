package com.mhell.users

import java.math.BigDecimal
import java.util.*

data class User(
    val email: String,
    val password: String = "",
    val balance: BigDecimal = BigDecimal.ZERO.setScale(2),

    val id: UUID = UUID.randomUUID()
)
