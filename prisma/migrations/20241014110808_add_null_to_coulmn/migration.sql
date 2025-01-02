BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [CtrNumM] VARCHAR(255) NULL;
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [DDate] DATETIME2 NULL;
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [CustNameEn] VARCHAR(255) NULL;
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [CustCode] INT NULL;
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [ComType] VARCHAR(255) NULL;
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [CurrShNameEn] VARCHAR(255) NULL;
ALTER TABLE [dbo].[TblMSContractMain] ALTER COLUMN [Premium] FLOAT(53) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH