-- CreateTable
CREATE TABLE "pessoa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "creted_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "pessoa_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pessoa_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
