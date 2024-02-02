-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "foto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "imagens" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    CONSTRAINT "foto_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comentario" TEXT NOT NULL,
    "idFoto" INTEGER NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    CONSTRAINT "comentario_idFoto_fkey" FOREIGN KEY ("idFoto") REFERENCES "foto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comentario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
