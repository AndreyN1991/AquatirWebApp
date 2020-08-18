using Microsoft.EntityFrameworkCore.Migrations;

namespace AquatirWebApp.Migrations
{
    public partial class addaccountmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    AccountId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "100, 1"),
                    uGoo = table.Column<int>(nullable: false),
                    AccountName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.AccountId);
                    table.ForeignKey(
                        name: "FK_Accounts_wrGoo_uGoo",
                        column: x => x.uGoo,
                        principalTable: "wrGoo",
                        principalColumn: "uGoo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_uGoo",
                table: "Accounts",
                column: "uGoo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
