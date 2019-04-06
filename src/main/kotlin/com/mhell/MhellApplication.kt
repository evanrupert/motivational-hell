package com.mhell

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MhellApplication

fun main(args: Array<String>) {
	runApplication<MhellApplication>(*args)
}
