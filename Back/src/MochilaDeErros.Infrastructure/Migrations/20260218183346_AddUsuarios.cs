using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MochilaDeErros.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddUsuarios : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UsuarioId",
                table: "Mochilas",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Plano = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Mochilas_UsuarioId",
                table: "Mochilas",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Mochilas_Usuarios_UsuarioId",
                table: "Mochilas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Mochilas_Usuarios_UsuarioId",
                table: "Mochilas");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropIndex(
                name: "IX_Mochilas_UsuarioId",
                table: "Mochilas");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "Mochilas");
        }
    }
}
