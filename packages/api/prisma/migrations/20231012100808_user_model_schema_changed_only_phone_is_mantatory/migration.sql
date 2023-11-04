-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;
