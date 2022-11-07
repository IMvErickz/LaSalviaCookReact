/*
  Warnings:

  - The primary key for the `Recepie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Recepie` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recepie" (
    "tittle" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL
);
INSERT INTO "new_Recepie" ("body", "tittle") SELECT "body", "tittle" FROM "Recepie";
DROP TABLE "Recepie";
ALTER TABLE "new_Recepie" RENAME TO "Recepie";
CREATE UNIQUE INDEX "Recepie_tittle_key" ON "Recepie"("tittle");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
