/*
  Warnings:

  - You are about to drop the `TblFilledOil` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[TblFilledOil];

-- CreateTable
CREATE TABLE [dbo].[TblMSContractMain] (
    [id] INT NOT NULL IDENTITY(1,1),
    [CtrNumM] VARCHAR(255) NOT NULL,
    [DDate] DATETIME2 NOT NULL CONSTRAINT [TblMSContractMain_DDate_df] DEFAULT CURRENT_TIMESTAMP,
    [CustNameEn] VARCHAR(255) NOT NULL,
    [CustCode] INT NOT NULL,
    [ComType] VARCHAR(255) NOT NULL,
    [CurrShNameEn] VARCHAR(255) NOT NULL,
    [Premium] FLOAT(53) NOT NULL,
    CONSTRAINT [TblMSContractMain_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
