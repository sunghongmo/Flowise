import 'reflect-metadata'
import path from 'path'
import { DataSource } from 'typeorm'
import { ChatFlow } from './entity/ChatFlow'
import { ChatMessage } from './entity/ChatMessage'
import { getUserHome } from './utils'

let appDataSource: DataSource

export const init = async (): Promise<void> => {
    appDataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'password!',
        database: 'fastapi_db',
        synchronize: true,
        entities: [ChatFlow, ChatMessage],
        migrations: []
    })
}

export function getDataSource(): DataSource {
    if (appDataSource === undefined) {
        init()
    }
    return appDataSource
}
