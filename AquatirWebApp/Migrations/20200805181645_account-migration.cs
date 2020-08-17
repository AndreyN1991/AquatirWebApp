using Microsoft.EntityFrameworkCore.Migrations;

namespace AquatirWebApp.Migrations
{
    public partial class accountmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "wrGoo",
                columns: table => new
                {
                    uGoo = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cGoo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_wrGoo", x => x.uGoo);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "wrGoo");
        }
    }
}
