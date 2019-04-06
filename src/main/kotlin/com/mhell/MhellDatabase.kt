package com.mhell

import org.jetbrains.exposed.sql.Database

interface MhellDatabase {
    val connect: Database
}

