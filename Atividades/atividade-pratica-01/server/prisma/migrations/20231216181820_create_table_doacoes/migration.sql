-- CreateTable
CREATE TABLE "doacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa_id" INTEGER NOT NULL,
    "local_id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "doacoes_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "doacoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
