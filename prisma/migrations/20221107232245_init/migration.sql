-- CreateTable
CREATE TABLE "Recepie" (
    "tittle" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Recepie_tittle_key" ON "Recepie"("tittle");
