BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Table_1] (
    [id] INT,
    [age] INT
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
