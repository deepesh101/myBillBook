import { openDB } from 'idb'

class DBService {
    constructor(database) {
        this.db = null
        this.database = database
    }
    async createObjectStore() {
        this.db = await openDB(this.database, 1, {
            upgrade: (db, oldVersion, newVersion, transaction) => {
                switch (oldVersion) {
                case 0:
                case 1:
                    db.createObjectStore(this.database, { keyPath: 'index' })
                    const tx = transaction.objectStore(this.database, 'readwrite')
                    tx.createIndex('name', 'name')
                    tx.createIndex('code', 'code')
                    tx.createIndex('salesPrice', 'salesPrice')
                    tx.createIndex('purchasePrice', 'purchasePrice')
                    tx.createIndex('unit', 'unit')
                    tx.createIndex('date', 'date')
                    break
                    default: break
                }
            }
        })
    }
    async getAll(tableSpace) {
        const tx = this.db.transaction(tableSpace, 'readonly')
        const store = tx.objectStore(tableSpace)
        const result = await store.getAll()
        return result
    }
    async putValue(tableName, value) {
        const tx = this.db.transaction(tableName, 'readwrite')
        const store = tx.objectStore(tableName)
        const result = await store.put(value)
        return result
    }
}

export default DBService