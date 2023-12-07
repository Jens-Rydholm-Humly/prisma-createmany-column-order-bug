-- CreateTable
CREATE TABLE "data_points" (
    "id" SERIAL NOT NULL,
    "alpha" INTEGER NOT NULL,
    "beta" INTEGER NOT NULL,
    "gamma" INTEGER NOT NULL,
    "delta" INTEGER NOT NULL,
    "epsilon" INTEGER NOT NULL,

    CONSTRAINT "data_points_pkey" PRIMARY KEY ("id")
);
